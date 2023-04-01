import { useFormValue } from 'sanity';
import get from 'lodash.get';

const PlaceholderStringInput = (props) => {
  const { schemaType } = props;

  const path = schemaType?.options?.field;
  const doc = useFormValue([]);

  const proxyValue = path ? get(doc, path) : '';

  return props.renderDefault({
    ...props,
    elementProps: { placeholder: proxyValue, ...props.elementProps },
  });
};

export default PlaceholderStringInput;
