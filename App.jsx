const { useState } = React;

function Header({ activeTab }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div>
          <h1 className="text-lg font-bold">
            Hype<span className="text-cyan-400">Brandluxury</span>
          </h1>
          <p className="text-xs text-slate-500">{activeTab}</p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
          🔔
        </button>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 p-6">
        <p className="text-sm text-cyan-300">Welcome</p>
        <h2 className="mt-2 text-3xl font-bold">Build your brand.</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Single React application running directly from index.html.
        </p>
        <button className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
          Explore
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatCard value="24" label="Products" />
        <StatCard value="12" label="Brands" />
        <StatCard value="08" label="Collections" />
        <StatCard value="99+" label="Ideas" />
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
    </div>
  );
}

function Catalog() {
  const products = [
    { id: 1, name: "Essential Tee", category: "Fashion", price: "$49" },
    { id: 2, name: "Luxury Hoodie", category: "Streetwear", price: "$129" },
    { id: 3, name: "Signature Cap", category: "Accessories", price: "$39" },
    { id: 4, name: "Premium Jacket", category: "Outerwear", price: "$199" },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Catalog</h2>
        <p className="mt-1 text-sm text-slate-500">
          Discover the collection.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-4xl">
        ✦
      </div>
      <div className="p-4">
        <p className="text-xs text-cyan-400">{product.category}</p>
        <h3 className="mt-1 font-semibold">{product.name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">{product.price}</span>
          <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-950">
            View
          </button>
        </div>
      </div>
    </article>
  );
}

function Profile() {
  return (
    <section>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-3xl">
          HB
        </div>
        <h2 className="mt-5 text-2xl font-bold">Hype Brandluxury</h2>
        <p className="mt-2 text-sm text-slate-500">Creative brand profile</p>
      </div>

      <div className="mt-4 space-y-3">
        <ProfileItem icon="👤" label="Account" />
        <ProfileItem icon="⚙️" label="Settings" />
        <ProfileItem icon="🔒" label="Privacy" />
        <ProfileItem icon="ℹ️" label="About" />
      </div>
    </section>
  );
}

function ProfileItem({ icon, label }) {
  return (
    <button className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
      <span>{icon}</span>
      <span className="font-medium">{label}</span>
      <span className="ml-auto text-slate-600">›</span>
    </button>
  );
}

function BottomNav({ activeTab, setActiveTab }) {
  const items = [
    { id: "Home", icon: "⌂" },
    { id: "Catalog", icon: "◈" },
    { id: "Profile", icon: "●" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl">
        {items.map((item) => {
          const active = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs ${
                active ? "text-cyan-400" : "text-slate-500"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.id}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function Overlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-white/20" />
        <h2 className="text-xl font-bold">Overlay</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Reusable overlay layer for modal, menu, dialog or notification.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-slate-950"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Main({ activeTab }) {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 pb-28 pt-6">
      {activeTab === "Home" && <Home />}
      {activeTab === "Catalog" && <Catalog />}
      {activeTab === "Profile" && <Profile />}
    </main>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header activeTab={activeTab} />
      <Main activeTab={activeTab} />

      <button
        onClick={() => setOverlayOpen(true)}
        className="fixed bottom-20 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-xl font-bold text-slate-950 shadow-lg"
      >
        +
      </button>

      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Overlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
