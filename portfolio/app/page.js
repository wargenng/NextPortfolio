import { CgAddR } from "react-icons/cg";

export default function Home() {
    function changeSymbol(event) {
        console.log(event);
    }
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex items-center gap-2">
                <button onClick={changeSymbol()}>
                    <CgAddR />{" "}
                </button>
                wargen guittap
            </div>
        </div>
    );
}
