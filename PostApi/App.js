import React, { useEffect, useState, useCallback } from "react";
import { Alert } from "react-native";
import PostsListScreen from "./screens/PostsListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import PostEditScreen from "./screens/PostEditScreen";
import { loadPosts, savePosts } from "./storage/local";
import { enqueue } from "./sync/queue";
import { processQueue, tryOnline } from "./sync/syncManager";

export default function App() {
  const [route, setRoute] = useState({ name: "list" });
  const [posts, setPosts] = useState([]);
  const [syncState, setSyncState] = useState("synced");

  useEffect(() => { (async () => setPosts(await loadPosts()))(); }, []);

  const nav = {
    openDetail: (post) => setRoute({ name: "detail", post }),
    openEditor: (post) => setRoute({ name: "edit", post }),
    cancelEdit: () => setRoute({ name: "list" }),
    goList: () => setRoute({ name: "list" }),

    async savePost(patch) {

      const next = [...posts];
      const idx = next.findIndex(p => p.id === patch.id);
      if (idx >= 0) next[idx] = { ...next[idx], ...patch, _status: "pending" };
      else next.unshift({ ...patch, _status: "pending" }); 
      setPosts(next); await savePosts(next);

      await enqueue({ op: idx >= 0 ? "update" : "create", post: patch });
      setRoute({ name: "list" });

      if (await tryOnline()) await processQueue(setSyncState);
    },

    async deletePost(post) {
      Alert.alert("Eliminar", "¿Seguro que deseas eliminar este post?", [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar", style: "destructive", onPress: async () => {
            const next = posts.filter(p => p.id !== post.id);
            setPosts(next); await savePosts(next);
            await enqueue({ op: "delete", id: post.id });
            setRoute({ name: "list" });
            if (await tryOnline()) await processQueue(setSyncState);
          }
        }
      ]);
    }
  };

  if (route.name === "detail") return <PostDetailScreen post={route.post} nav={nav} />;
  if (route.name === "edit")   return <PostEditScreen post={route.post} nav={nav} />;
  return <PostsListScreen nav={nav} />;
}
