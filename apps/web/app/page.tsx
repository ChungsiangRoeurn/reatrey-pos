import Header from "@/components/layout/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-800">
          Welcome to <span className="text-primary">Reatrey POS</span>
        </h1>
        <p className="text-muted-foreground mb-6 max-w-md">
          Reatrey POS is a smart, user-friendly point of sale system designed
          for small to medium businesses in Cambodia. Manage your products,
          track sales, control inventory, and monitor performance—all in one
          place.
        </p>
      </main>
    </>
  );
}
