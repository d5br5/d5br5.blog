export default function AboutLayout(props: {
  children: React.ReactNode;
  project_modal: React.ReactNode;
}) {
  return (
    <div>
      {props.children}
      {props.project_modal}
    </div>
  );
}
