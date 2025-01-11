import type {Ref} from "vue";

interface InfiniteScrollOptions {
    threshold?: number;
    immediate?: boolean;
}

interface InfiniteScrollResult {
    target: Ref<HTMLElement | null>;
    isLoading: Ref<boolean>;
    load: () => Promise<void>;
}