import type { RequestMetaRiskType } from '$lib/queries/risks';
import '@poppanator/sveltekit-svg/dist/svg';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		//interface Locals {}
		//interface Session {}
		// interface PageData {}
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<any>): void; //eslint-disable-line
			};
			caches: CacheStorage & { default: Cache };
		}
	}

	declare type Item = import('svelte-dnd-action').Item;
	declare type DndEvent<ItemType = Item> = import('svelte-dnd-action').DndEvent<ItemType>;
	//TODO(dsgallups): remove
	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:consider'?: (
				event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T },
			) => void;
			'on:finalize'?: (
				event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T },
			) => void;
			'on:click_outside'?: (event: CustomEvent<MouseEvent> & { target: EventTarget & T }) => void;
		}
	}
}

declare module '@tanstack/table-core' {
	/* eslint-disable-next-line */
	interface ColumnMeta<Risk, unknown> {
		meta: {
			filterKey: keyof Risk;
			editableType: RequestMetaRiskType;
		};
	}
	interface ColumnDefBase<Risk> {
		accessorKey: keyof Risk;
	}
}

export {};
