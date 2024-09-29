import CategoriesPage from "@/components/templates/CategoriesPage";

export default async function Categories({ searchParams }) {
    const { difficulty, time } = searchParams;

    const res = await fetch(
        `http://localhost:3000/api/foods/categories?difficulty=${difficulty}&time=${time}`,
        {
            cache: "no-store",
        }
    );
    const filteredData = await res.json();

    return <CategoriesPage data={filteredData} />;
}
