
export const onDelete = async (tabla, id) => {
    try {
        const response = await fetch(`http://localhost:4000/api/${tabla}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error(data.error || 'Error al borrar el elemento');
        }
        return { success: true, data};
    } catch (error) {
        console.error("Error al borrar el elemento", error);
        return { success: false, error };
    }
};