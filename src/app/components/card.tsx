

interface CardProps {
    id:number;
    title: string;
    description: string;
    button: string;
  }

export default function Card(props: CardProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">{props.button}</button>
            </div>
        </div>
        </div>
    )
}