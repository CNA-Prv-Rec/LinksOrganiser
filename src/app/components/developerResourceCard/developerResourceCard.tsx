export default function DeveloperResourceCard(props: { id: bigint, url: string, title: string, description:string,  category:string, className: string }) {
  return (
    <div className="card" >
        <div className="card-content">
            <div className={props.className}>
                <div className="card-title">
                {props.title}
                </div>
                <div className="card-body">
                <a href={props.url} target="_blank" rel="noopener noreferrer">{props.description}</a>
                </div>
                <div className="card-footer">
                <i>{props.category}</i>
                </div>
            </div>
        </div>
    </div>
  );
}