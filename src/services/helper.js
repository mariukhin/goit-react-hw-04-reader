import qs from 'query-string';

export function getIndex(items, activeItem) {
  return items.indexOf(activeItem);
}
export const getItemFromProps = props => qs.parse(props.location.search).item; 