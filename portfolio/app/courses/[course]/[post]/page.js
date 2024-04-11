import dynamic from "next/dynamic";

export default async function Page({ params }) {
    const Post = dynamic(() => import(`./${params.post}.mdx`), {
        ssr: false,
    });
    return (
        <div className="prose flex flex-col p-8 w-full h-full">
            <Post />
        </div>
    );
}
