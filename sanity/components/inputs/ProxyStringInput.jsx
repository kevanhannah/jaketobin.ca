import { LockIcon } from '@sanity/icons';
import { Box, Text, TextInput, Tooltip } from '@sanity/ui';
import { useFormValue } from 'sanity';
import get from 'lodash.get';

const ProxyString = (props) => {
  const { schemaType } = props;
  const path = schemaType?.options?.field;
  const doc = useFormValue([]);
  const proxyValue = path ? get(doc, path) : '';

  return (
    <Tooltip
      content={
        <Box padding={2}>
          <Text muted size={1}>
            This value is set in Shopify (<code>{path}</code>)
          </Text>
        </Box>
      }
      portal
    >
      <TextInput iconRight={LockIcon} readOnly value={proxyValue} />
    </Tooltip>
  );
};

export default ProxyString;
