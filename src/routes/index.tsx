import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../mariani.css";
import logo from "@/assets/mariani-logo.png";
import heroImg from "@/assets/mariani-hero.jpg";
import casaEtapaEFachada from "@/assets/casa-etapa-e-fachada.jpg";
import casaEtapaEGourmet from "@/assets/casa-etapa-e-gourmet.jpg";
import casaEtapaESala from "@/assets/casa-etapa-e-sala.jpg";
import casaEtapaEBanheiro from "@/assets/casa-etapa-e-banheiro.jpg";
import sobradoPracaFachada from "@/assets/sobrado-praca-fachada.jpg";
import sobradoPracaFachada2 from "@/assets/sobrado-praca-fachada2.jpg";
import sobradoPracaPiscina from "@/assets/sobrado-praca-piscina.jpg";
import sobradoPracaGourmet from "@/assets/sobrado-praca-gourmet.jpg";
import sobradoPracaCozinha from "@/assets/sobrado-praca-cozinha.jpg";
import sobradoPracaSala from "@/assets/sobrado-praca-sala.jpg";
import sobradoPracaEscada from "@/assets/sobrado-praca-escada.jpg";
import sobradoPracaMezanino from "@/assets/sobrado-praca-mezanino.jpg";
import sobradoPracaSuite from "@/assets/sobrado-praca-suite.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariani Imob – Gestão Inteligente · Valparaíso de Goiás" },
      {
        name: "description",
        content:
          "Imobiliária em Valparaíso de Goiás: compra, venda e locação com atendimento personalizado e gestão inteligente.",
      },
      { property: "og:title", content: "Mariani Imob – Gestão Inteligente" },
      {
        property: "og:description",
        content: "Compra, venda e locação de imóveis em Valparaíso de Goiás.",
      },
    ],
  }),
  component: Index,
});

type Imovel = {
  tipo: "venda" | "locacao";
  tipoLabel: "Venda" | "Locação";
  title: string;
  location: string;
  price: string;
  priceHtml?: string;
  quartos?: string;
  banheiros?: string;
  area?: string;
  vagas?: string;
  desc: string;
  img: string;
  thumb: string;
  images?: string[];
  cardTitle: string;
};

const IMOVEIS: Imovel[] = [
  {
    tipo: "venda", tipoLabel: "Venda",
    title: "Casa com Área Gourmet e Mezanino",
    location: "Etapa E · Valparaíso de Goiás – GO",
    price: "R$ 750.000",
    quartos: "4", banheiros: "2", area: "360m²", vagas: "2",
    desc: "Excelente casa na Etapa E, próxima à BR. Lote de 360m² com 4 quartos (1 suíte com hidromassagem e box de dois chuveiros), banheiro social, duas salas amplas com sanca de gesso, cozinha com armários embutidos e pedra Selestone. Área gourmet completa com balcão, churrasqueira, fogão a lenha, banheiro e área de serviço. Mezanino superior em madeira (academia/quarto multifuncional) e pérgola em madeira e vidro. Aceita permuta em carro como parte do pagamento.",
    img: casaEtapaEFachada,
    thumb: casaEtapaEFachada,
    images: [casaEtapaEFachada, casaEtapaEGourmet, casaEtapaESala, casaEtapaEBanheiro],
    cardTitle: "Casa 4 quartos com área gourmet · Etapa E",
  },
  {
    tipo: "venda", tipoLabel: "Venda",
    title: "Sobrado Frente à Praça",
    location: "Valparaíso I · Valparaíso de Goiás – GO",
    price: "R$ 530.000",
    quartos: "6", banheiros: "5", area: "—", vagas: "3",
    desc: "Sobrado residencial de 2 pavimentos em rua tranquila com praça arborizada em frente. 6 quartos no total — 3 suítes no pavimento superior e 1 suíte no inferior, sendo uma com varanda voltada para a piscina. Duas salas com entradas independentes conectadas por corredor, banheiro social e banheiro de apoio à piscina. Área de lazer completa: piscina adulta e infantil em formato oval, área gramada com palmeira, área gourmet coberta com churrasqueira em tijolinho aparente, forno de pizza e bancada em pastilha azul/turquesa com granito. Garagem coberta com portão para até 3 veículos. Aceita financiamento, FGTS e permuta de veículo.",
    img: sobradoPracaFachada,
    thumb: sobradoPracaFachada,
    images: [sobradoPracaFachada, sobradoPracaFachada2, sobradoPracaPiscina, sobradoPracaGourmet, sobradoPracaCozinha, sobradoPracaSala, sobradoPracaEscada, sobradoPracaMezanino, sobradoPracaSuite],
    cardTitle: "Sobrado 6 quartos frente à praça · Valparaíso I",
  },
  {
    tipo: "venda", tipoLabel: "Venda",
    title: "Casa com Área de Lazer",
    location: "Valparaíso de Goiás – GO",
    price: "R$ 420.000",
    quartos: "3", banheiros: "2", area: "180m²", vagas: "2",
    desc: "Excelente casa com 3 quartos, sendo 1 suíte, ampla sala de estar e jantar, cozinha planejada, área de lazer com churrasqueira e piscina. Localização privilegiada, próxima a escolas, comércio e transporte público.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=85",
    thumb: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    cardTitle: "Casa ampla com área de lazer · Valparaíso de Goiás",
  },
  {
    tipo: "venda", tipoLabel: "Venda",
    title: "Sobrado em Condomínio Fechado",
    location: "Valparaíso de Goiás – GO",
    price: "R$ 680.000",
    quartos: "4", banheiros: "3", area: "260m²", vagas: "3",
    desc: "Sobrado moderno de alto padrão em condomínio fechado com segurança 24h. 4 suítes, escritório, área gourmet completa, jardim e 3 vagas cobertas. Acabamentos refinados e localização nobre.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85",
    thumb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    cardTitle: "Sobrado moderno em condomínio fechado",
  },
  {
    tipo: "locacao", tipoLabel: "Locação",
    title: "Apartamento 2 Quartos",
    location: "Centro · Valparaíso de Goiás – GO",
    price: "R$ 1.800", priceHtml: 'R$ 1.800 <small>/mês</small>',
    quartos: "2", banheiros: "1", area: "68m²", vagas: "1",
    desc: "Apartamento bem localizado no centro de Valparaíso, próximo ao comércio e transporte. 2 quartos com armários embutidos, sala, cozinha e área de serviço. 1 vaga de garagem coberta. Pronto para morar.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=85",
    thumb: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    cardTitle: "Apartamento 2 quartos · Centro de Valparaíso",
  },
  {
    tipo: "venda", tipoLabel: "Venda",
    title: "Casa Térrea com Quintal",
    location: "Etapa A · Valparaíso de Goiás – GO",
    price: "R$ 290.000",
    quartos: "3", banheiros: "2", area: "130m²", vagas: "1",
    desc: "Casa térrea em ótimo estado, com 3 quartos, 2 banheiros, sala ampla, cozinha reformada e quintal espaçoso. Localizada na Etapa A, próxima a tudo. Documentação regularizada e pronta para transferência.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=85",
    thumb: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    cardTitle: "Casa térrea com quintal · Etapa A",
  },
  {
    tipo: "locacao", tipoLabel: "Locação",
    title: "Kitnet Mobiliada",
    location: "Centro · Valparaíso de Goiás – GO",
    price: "R$ 950", priceHtml: 'R$ 950 <small>/mês</small>',
    quartos: "1", banheiros: "1", area: "32m²",
    desc: "Kitnet totalmente mobiliada, ideal para estudantes e profissionais. Inclui cama, guarda-roupa, sofá, mesa e todos os eletrodomésticos. Conta de água e condomínio inclusos no valor do aluguel.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=85",
    thumb: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    cardTitle: "Kitnet mobiliada · Centro",
  },
  {
    tipo: "venda", tipoLabel: "Venda",
    title: "Lote em Área Nobre",
    location: "Valparaíso de Goiás – GO",
    price: "R$ 95.000",
    area: "360m²",
    desc: "Lote plano de 360m² em uma das regiões mais valorizadas de Valparaíso. Documentação completa e escriturada. Ótima oportunidade para construir sua casa ou realizar um investimento seguro na região.",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85",
    thumb: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    cardTitle: "Lote plano em área nobre · 360m²",
  },
];

const WA = "https://wa.me/5561995056664";

function Index() {
  const [filter, setFilter] = useState<"todos" | "venda" | "locacao">("todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Imovel | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { setGalleryIdx(0); }, [selected]);
  const galleryImages = selected ? (selected.images && selected.images.length ? selected.images : [selected.img]) : [];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filter]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (!selected) return;
      const len = (selected.images && selected.images.length) || 1;
      if (e.key === "ArrowRight") setGalleryIdx((i) => (i + 1) % len);
      if (e.key === "ArrowLeft") setGalleryIdx((i) => (i - 1 + len) % len);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const filtered = IMOVEIS.filter((i) => filter === "todos" || i.tipo === filter);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.currentTarget?.reset();
    }, 3000);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="navbar" className="scrolled">
        <a href="#" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Mariani Imob" />
          <div className="brand-text">
            <span className="brand-name">Mariani Imob</span>
            <span className="brand-sub">Gestão Inteligente</span>
          </div>
        </a>
        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li><a href="#imoveis" onClick={closeMenu}>Imóveis</a></li>
          <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
          <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          <li><a href="#contato" className="nav-cta" onClick={closeMenu}>Fale Conosco</a></li>
        </ul>
        <button
          className={`mobile-toggle${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-inner">
          <div>
            <span className="hero-tag">Valparaíso de Goiás · GO</span>
            <h1>O imóvel certo para <span className="accent">cada momento</span> da sua vida</h1>
            <p className="hero-desc">Compra, venda e locação com atendimento personalizado, transparência e gestão inteligente em cada etapa da sua negociação.</p>
            <div className="hero-btns">
              <a href="#imoveis" className="btn btn-primary">Ver imóveis <span className="arrow">→</span></a>
              <a href="#contato" className="btn btn-ghost">Fale com a gente</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="ring"></div>
            <div className="photo" style={{ backgroundImage: `url(${heroImg})` }}></div>
            <div className="float-card">
              <span className="dot"></span>
              <span>Atendimento online</span>
            </div>
            <div className="badge-card">
              <div className="ico">★</div>
              <div className="meta">
                <b>100% satisfação</b>
                <span>+300 famílias atendidas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat reveal"><span className="stat-num">+300</span><span className="stat-label">Imóveis negociados</span></div>
        <div className="stat reveal"><span className="stat-num">+10</span><span className="stat-label">Anos de experiência</span></div>
        <div className="stat reveal"><span className="stat-num">100%</span><span className="stat-label">Clientes satisfeitos</span></div>
        <div className="stat reveal"><span className="stat-num">1ª</span><span className="stat-label">Opção na região</span></div>
      </div>

      <section id="imoveis">
        <div className="container">
          <div className="imoveis-header">
            <div>
              <span className="section-tag">Portfólio</span>
              <h2 className="section-title">Imóveis em <span className="accent">destaque</span></h2>
              <p className="section-sub">Seleção atualizada de oportunidades em Valparaíso e região.</p>
            </div>
            <div className="filter-tabs">
              {(["todos", "venda", "locacao"] as const).map((f) => (
                <button
                  key={f}
                  className={`filter-tab${filter === f ? " active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f === "todos" ? "Todos" : f === "venda" ? "Venda" : "Locação"}
                </button>
              ))}
            </div>
          </div>

          <div className="imoveis-grid">
            {filtered.map((im, idx) => (
              <div key={idx} className="card reveal" onClick={() => setSelected(im)}>
                <div className="card-img">
                  <img src={im.thumb} alt={im.title} loading="lazy" />
                  <span className={`card-badge${im.tipo === "locacao" ? " locacao" : ""}`}>{im.tipoLabel}</span>
                  <div className="card-overlay">
                    <button className="card-view-btn">Ver detalhes →</button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-price" dangerouslySetInnerHTML={{ __html: im.priceHtml ?? im.price }} />
                  <p className="card-title">{im.cardTitle}</p>
                  <div className="card-features">
                    {im.quartos && <span className="feat"><strong>{im.quartos}</strong> quartos</span>}
                    {im.banheiros && <span className="feat"><strong>{im.banheiros}</strong> banh.</span>}
                    {im.area && <span className="feat"><strong>{im.area}</strong></span>}
                    {im.vagas && <span className="feat"><strong>{im.vagas}</strong> vagas</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="imoveis-cta reveal">
            <a href="#contato" className="btn btn-dark">Consultar mais opções <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="modal-overlay open"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="modal">
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-gallery">
              <img src={selected.img} alt={selected.title} />
              <span className={`modal-gallery-badge${selected.tipo === "locacao" ? " locacao" : ""}`}>{selected.tipoLabel}</span>
            </div>
            <div className="modal-body">
              <span className="modal-location">{selected.location}</span>
              <h2 className="modal-title">{selected.title}</h2>
              <div className="modal-price" dangerouslySetInnerHTML={{ __html: selected.priceHtml ?? selected.price }} />
              <div className="modal-features">
                {selected.quartos && <div className="modal-feat"><span>Quartos</span><strong>{selected.quartos}</strong></div>}
                {selected.banheiros && <div className="modal-feat"><span>Banheiros</span><strong>{selected.banheiros}</strong></div>}
                {selected.area && <div className="modal-feat"><span>Área total</span><strong>{selected.area}</strong></div>}
                {selected.vagas && <div className="modal-feat"><span>Vagas</span><strong>{selected.vagas}</strong></div>}
              </div>
              <p className="modal-desc">{selected.desc}</p>
              <div className="modal-actions">
                <a
                  href={`${WA}?text=${encodeURIComponent(`Olá! Tenho interesse no imóvel "${selected.title}" (${selected.tipoLabel} · ${selected.price}) localizado em ${selected.location}. Poderia me passar mais informações?`)}`}
                  target="_blank" rel="noreferrer"
                  className="modal-wa"
                >
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.48 2.02 7.78L0 32l8.47-2A15.9 15.9 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm7.27 20.43c-.4-.2-2.36-1.16-2.72-1.3-.37-.13-.63-.2-.9.2-.27.4-1.03 1.3-1.27 1.56-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.97-1.18-1.06-1.98-2.36-2.22-2.76-.23-.4-.02-.62.18-.81.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.16-1.23-2.96-.32-.78-.65-.67-.9-.69l-.76-.01c-.27 0-.7.1-1.06.5-.37.4-1.4 1.36-1.4 3.32s1.43 3.86 1.63 4.12c.2.27 2.81 4.3 6.81 6.02.95.4 1.7.65 2.27.84.96.3 1.83.26 2.51.16.77-.12 2.36-.97 2.69-1.9.33-.93.33-1.73.23-1.9-.1-.16-.36-.26-.76-.46z"/></svg>
                  WhatsApp
                </a>
                <a href="#contato" className="modal-contact" onClick={() => setSelected(null)}>Enviar mensagem</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="sobre">
        <div className="container sobre-grid">
          <div className="sobre-img-wrap reveal">
            <div className="main-img"></div>
            <div className="accent-card">
              <div className="num">+10</div>
              <div className="lbl">anos cuidando do patrimônio dos nossos clientes</div>
            </div>
          </div>
          <div className="sobre-text reveal">
            <span className="section-tag">Quem somos</span>
            <h2 className="section-title">Mais que uma imobiliária, <span className="accent">um parceiro</span> de confiança</h2>
            <p>A Mariani Imob nasceu da crença de que cada transação imobiliária é um marco na vida das pessoas. Por isso, oferecemos um atendimento que vai além — escutamos, entendemos e buscamos a solução ideal para cada cliente.</p>
            <p>Atuando em Valparaíso de Goiás e região, temos profundo conhecimento do mercado local e das melhores oportunidades. Combinamos experiência, dedicação e ética em cada negociação.</p>
            <div className="sobre-values">
              {[
                ["Transparência", "Sem letras miúdas"],
                ["Agilidade", "Respostas no mesmo dia"],
                ["Segurança jurídica", "Documentação revisada"],
                ["Atendimento humano", "De pessoa para pessoa"],
              ].map(([t, s]) => (
                <div key={t} className="value-pill">
                  <div className="vico">✓</div>
                  <div><strong>{t}</strong><span>{s}</span></div>
                </div>
              ))}
            </div>
            <a href="#contato" className="btn btn-primary">Fale com nossa equipe <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <section id="servicos">
        <div className="container">
          <span className="section-tag" style={{ color: "var(--teal-light)" }}>O que oferecemos</span>
          <h2 className="section-title">Serviços <span className="accent">especializados</span></h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,.6)" }}>Soluções completas para quem compra, vende, aluga ou investe.</p>
          <div className="servicos-grid" style={{ marginTop: 50 }}>
            {[
              { t: "Compra e Venda", d: "Mediação completa do processo com avaliação de mercado, divulgação estratégica e suporte jurídico em toda a documentação.", p: <><path d="M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2V11z"/></> },
              { t: "Locação", d: "Administração de imóveis para locação com seleção criteriosa de inquilinos, contratos seguros e gestão completa do período.", p: <><circle cx="9" cy="12" r="6"/><path d="M15 12h7M19 9v6"/></> },
              { t: "Avaliação de Imóveis", d: "Laudos técnicos e avaliações precisas com base no mercado regional, garantindo que você negocie pelo valor justo.", p: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12l3 3 5-6"/></> },
              { t: "Assessoria Documental", d: "Suporte completo na regularização e organização de toda a documentação para uma negociação segura e sem imprevistos.", p: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></> },
              { t: "Consultoria de Investimentos", d: "Orientação especializada para quem deseja investir no mercado imobiliário com segurança e as melhores oportunidades da região.", p: <><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></> },
              { t: "Atendimento Personalizado", d: "Cada cliente recebe atenção exclusiva com acompanhamento próximo desde o primeiro contato até a entrega das chaves.", p: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></> },
            ].map((s) => (
              <div key={s.t} className="servico reveal">
                <div className="servico-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>{s.p}</svg>
                </div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="container">
          <span className="section-tag">Anuncie conosco</span>
          <h2 className="section-title">Quer vender ou alugar <span className="accent" style={{ color: "rgba(255,255,255,.7)" }}>seu imóvel?</span></h2>
          <p>Cuidamos de cada etapa com atenção e profissionalismo. Você nos confia o seu bem, nós entregamos resultados.</p>
          <a href="#contato" className="btn btn-primary">Cadastrar meu imóvel <span className="arrow">→</span></a>
        </div>
      </div>

      <section id="contato">
        <div className="container">
          <span className="section-tag">Entre em contato</span>
          <h2 className="section-title">Fale com a <span className="accent">Mariani Imob</span></h2>
          <p className="section-sub">Estamos prontos para te atender com agilidade. Escolha o canal que preferir.</p>
          <div className="contato-grid">
            <div className="contato-info reveal">
              <div className="info-item">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div className="info-text">
                  <strong>Endereço</strong>
                  <span>Quadra 10, Lote 41, Sala 104 – Etapa A<br/>Valparaíso de Goiás – GO · CEP 72.876-030</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=Quadra+10+Lote+41+Etapa+A+Valpara%C3%ADso+de+Goi%C3%A1s+GO+72876-030" target="_blank" rel="noreferrer" className="maps-link">Abrir no Google Maps <span className="arrow">→</span></a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg></div>
                <div className="info-text"><strong>WhatsApp</strong><span><a href={WA} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>(61) 99505-6664</a></span></div>
              </div>
              <div className="info-item">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></div>
                <div className="info-text"><strong>E-mail</strong><span>contato@marianiimob.com.br</span></div>
              </div>
              <div className="info-item">
                <div className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                <div className="info-text"><strong>Atendimento</strong><span>Seg – Sex: 8h às 18h · Sáb: 8h às 12h</span></div>
              </div>
            </div>
            <div className="reveal">
              <form className="contato-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label>Nome completo</label><input type="text" placeholder="Seu nome" required /></div>
                  <div className="form-group"><label>Telefone</label><input type="tel" placeholder="(61) 99505-6664" /></div>
                </div>
                <div className="form-group"><label>E-mail</label><input type="email" placeholder="seu@email.com" /></div>
                <div className="form-group">
                  <label>Interesse</label>
                  <select defaultValue="">
                    <option value="">Selecione...</option>
                    <option>Quero comprar um imóvel</option>
                    <option>Quero alugar um imóvel</option>
                    <option>Quero vender meu imóvel</option>
                    <option>Quero alugar meu imóvel</option>
                    <option>Avaliação de imóvel</option>
                    <option>Outro assunto</option>
                  </select>
                </div>
                <div className="form-group"><label>Mensagem</label><textarea placeholder="Conte mais sobre o que você precisa..." /></div>
                <button type="submit" className="btn-submit" style={submitted ? { background: "#22C55E" } : undefined}>
                  {submitted ? "Mensagem enviada ✓" : <>Enviar mensagem <span className="arrow">→</span></>}
                </button>
              </form>
            </div>
          </div>
          <div className="map-wrap reveal">
            <iframe src="https://www.google.com/maps?q=Quadra+10+Lote+41+Etapa+A+Valpara%C3%ADso+de+Goi%C3%A1s+GO+72876-030&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Mapa Mariani Imob" />
            <a href="https://www.google.com/maps/search/?api=1&query=Quadra+10+Lote+41+Etapa+A+Valpara%C3%ADso+de+Goi%C3%A1s+GO+72876-030" target="_blank" rel="noreferrer" className="map-cta">
              <div className="mc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div><strong>Como chegar</strong><span>Abrir no Google Maps</span></div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="brand">
                <img src={logo} alt="Mariani Imob" style={{ filter: "brightness(0) invert(1)" }} />
                <div className="brand-text">
                  <span className="brand-name">Mariani Imob</span>
                  <span className="brand-sub">Gestão Inteligente</span>
                </div>
              </a>
              <p>Imobiliária especializada em Valparaíso de Goiás e região, com atendimento humano, transparente e focado em resultados para cada cliente.</p>
            </div>
            <div className="footer-col">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#imoveis">Imóveis</a></li>
                <li><a href="#sobre">Sobre nós</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#servicos">Compra e venda</a></li>
                <li><a href="#servicos">Locação</a></li>
                <li><a href="#servicos">Avaliação</a></li>
                <li><a href="#servicos">Consultoria</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <ul>
                <li><a href={WA} target="_blank" rel="noreferrer">(61) 99505-6664</a></li>
                <li><a href="#">contato@marianiimob.com.br</a></li>
                <li><a href="https://www.google.com/maps/search/?api=1&query=Quadra+10+Lote+41+Etapa+A+Valpara%C3%ADso+de+Goi%C3%A1s+GO+72876-030" target="_blank" rel="noreferrer">Qd. 10, Lt. 41, Sala 104 – Etapa A</a></li>
                <li><a href="#">Valparaíso de Goiás – GO</a></li>
                <li><a href="#">CEP 72.876-030</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Mariani Imob · Todos os direitos reservados</p>
            <div className="social-links">
              <a href="#" className="social-link" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              <a href="#" className="social-link" title="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4 1.8.8 2.4.8 3.3.7.5-.1 1.7-.7 2-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2z"/></svg></a>
              <a href="#" className="social-link" title="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>

      <a href={`${WA}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre os imóveis da Mariani Imob.")}`} target="_blank" rel="noreferrer" className="wa-float" title="WhatsApp Mariani Imob" aria-label="Falar no WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.736 5.476 2.023 7.781L0 32l8.469-2.004A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.854l-.486-.289-5.026 1.189 1.23-4.891-.318-.503A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.271-9.904c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.199-.266.398-1.031 1.295-1.264 1.561-.233.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.057-1.983-2.363-2.215-2.761-.232-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.685l-.764-.013c-.266 0-.697.1-1.062.498-.365.398-1.395 1.363-1.395 3.324s1.428 3.855 1.627 4.121c.199.266 2.811 4.291 6.813 6.019.952.411 1.695.657 2.274.841.955.304 1.824.261 2.511.158.766-.114 2.355-.963 2.688-1.893.333-.93.333-1.728.233-1.893-.099-.166-.365-.266-.763-.465z"/></svg>
      </a>
    </>
  );
}
