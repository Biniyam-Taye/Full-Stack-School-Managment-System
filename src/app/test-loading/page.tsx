
export default async function TestLoadingPage() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return <div className="text-white">Finished Loading</div>;
}
