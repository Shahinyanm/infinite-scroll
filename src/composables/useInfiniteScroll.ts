import { ref, onMounted, onUnmounted, type Ref } from 'vue';
import type {InfiniteScrollOptions, InfiniteScrollResult} from "@/types/infiite";

/**
 * Custom hook for implementing infinite scroll
 * @param {() => Promise<void>} loadMore - Function to load more data
 * @param {InfiniteScrollOptions} [options] - Options for the infinite scroll
 * @returns {InfiniteScrollResult} The target element and loading state
 */
export function useInfiniteScroll(
    loadMore: () => Promise<void>,
    options: InfiniteScrollOptions = {}
): InfiniteScrollResult {
    const { threshold = 100, immediate = true } = options;
    const target: Ref<HTMLElement | null> = ref(null);
    const isLoading = ref(false);

    const handleIntersect = async (entries: IntersectionObserverEntry[]): Promise<void> => {
        if (entries[0].isIntersecting && !isLoading.value) {
            await load();
        }
    };

    const observer = new IntersectionObserver(handleIntersect, {
        rootMargin: `0px 0px ${threshold}px 0px`,
    });

    const load = async (): Promise<void> => {
        isLoading.value = true;
        try {
            await loadMore();
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(() => {
        if (target.value) {
            observer.observe(target.value);
        }
        if (immediate) {
            load();
        }
    });

    onUnmounted(() => {
        observer.disconnect();
    });

    return { target, isLoading, load };
}
