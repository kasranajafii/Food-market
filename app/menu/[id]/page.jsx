import DetailsPage from "@/components/templates/DetailsPage";

export default async function MenuItemPage({ params }) {
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/foods/${id}`, {
        next: { revalidate: 60 * 60 },
    });

    const data = await res.json();

    return <DetailsPage {...data} />;
}
