export default function CreatePackageActions({
    form,
}: {
    form: any;
}) {

    return (

        <div className="mt-8 flex justify-end">

            <button
                onClick={() => form.post("/admin/packages")}
                className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-bold hover:bg-purple-700"
            >
                Create Package
            </button>

        </div>

    );

}