import { useCurrentBlockId } from '../../editor/EditorBlock';
import { setDocument, setSelectedBlockId, useDocument } from '../../editor/EditorContext';
import EditorChildrenIds from '../helpers/EditorChildrenIds';

import { ContainerProps } from './ContainerPropsSchema';

import { Container as BaseContainer } from '../../../components/block-container';


export default function ContainerEditor({ style, props }: ContainerProps) {
  const childrenIds = props?.childrenIds ?? [];

  const document = useDocument();
  const currentBlockId = useCurrentBlockId();

  return (
    <BaseContainer style={style}>
      <EditorChildrenIds
        childrenIds={childrenIds}
        onChange={({ block, blockId, childrenIds }) => {
          setDocument({
            [blockId]: block,
            [currentBlockId]: {
              type: 'Container',
              data: {
                ...document[currentBlockId].data,
                props: { childrenIds: childrenIds },
              },
            },
          });
          setSelectedBlockId(blockId);
        }}
      />
    </BaseContainer>
  );
}
