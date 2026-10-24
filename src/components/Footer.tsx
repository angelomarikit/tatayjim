import { brand, nav, products } from "../data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <img src={brand.logo} alt="" className="size-24 object-contain" />
          <p className="mt-4 text-[18px] font-medium">{brand.name}</p>
          <p className="mt-2 text-[15px] leading-relaxed text-paper/70">
            Herbal and personal-care products from {brand.company}. {brand.tagline}
          </p>
        </div>
        <div>
          <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-paper/50">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[15px] text-paper/85 hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-paper/50">Products</p>
          <ul className="mt-4 space-y-2">
            {products.map((product) => (
              <li key={product.id}>
                <a href="#products" className="text-[15px] text-paper/85 hover:text-paper">
                  {product.short}
                </a>
              </li>
            ))}
          </ul>
          <a href="#membership" className="mt-5 inline-block text-[15px] font-medium text-gold">
            Become a Reseller
          </a>
        </div>
        <div>
          <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-paper/50">Contact</p>
          <p className="mt-4 text-[15px]">{brand.contactPerson}</p>
          <p className="mt-2 text-[15px]">
            <a href={`tel:+63${brand.phone.slice(1)}`} className="text-paper/85 hover:text-paper">
              {brand.phoneLabel}
            </a>
          </p>
          <p className="mt-1 text-[15px] break-all">
            <a href={`mailto:${brand.email}`} className="text-paper/85 hover:text-paper">
              {brand.email}
            </a>
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-paper/75">
            {brand.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-[1320px] px-5 py-5 text-[13px] text-paper/55 md:px-8">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
