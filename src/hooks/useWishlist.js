import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "wishlist_product_ids_v1";

// ids: number[] 를 localStorage에 저장
function loadIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveIds(ids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // storage 막혀도 UI는 동작하게
  }
}

export default function useWishlist() {
  const [ids, setIds] = useState(() => loadIds());

  useEffect(() => {
    saveIds(ids);
  }, [ids]);

  const idSet = useMemo(() => new Set(ids), [ids]);

  const isWished = useCallback((productId) => idSet.has(productId), [idSet]);

  const toggleWish = useCallback((productId) => {
    setIds((prev) => {
      const exists = prev.includes(productId);
      return exists
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
    });
  }, []);

  const clearWish = useCallback(() => setIds([]), []);

  return { wishedIds: ids, isWished, toggleWish, clearWish };
}
