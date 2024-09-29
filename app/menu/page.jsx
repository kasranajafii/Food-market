import MenuPage from "@/components/templates/MenuPage";

export default async function Menu() {
    const res = await fetch("http://localhost:3000/api/foods", {
        next: { revalidate: 60 * 60 },
    });
    if (res.status === 404) {
        return <div>Not Found</div>;
    }
    console.log(res.status);

    const data = await res.json();
    return <MenuPage data={data} />;
}
