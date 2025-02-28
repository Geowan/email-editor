import { BaseZodDictionary, BlockConfiguration, DocumentBlocksDictionary } from '../utils';
/**
 * @param blocks Main DocumentBlocksDictionary
 * @returns React component that can render a BlockConfiguration that is compatible with blocks
 */
export default function buildBlockComponent<T extends BaseZodDictionary>(blocks: DocumentBlocksDictionary<T>): ({ type, data }: BlockConfiguration<T>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=buildBlockComponent.d.ts.map