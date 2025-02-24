export default function CircleNavItem(props) {
  return <div className={`px-2 py-1 ${props.IconAdmin || props.userName ? 'rounded-3 bg-body' : 'rounded-circle'}  bg-body-secondary`}>{props.item}</div>;
}