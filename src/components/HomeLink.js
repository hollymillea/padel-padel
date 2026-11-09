"use client";

const HOME_URL = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`;

export default function HomeLink({ children, ...props }) {
  const reloadHome = (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (window.location.pathname === HOME_URL) {
      event.preventDefault();
      window.history.replaceState(window.history.state, "", HOME_URL);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      window.location.reload();
    }
  };

  return (
    <a {...props} href={HOME_URL} onClick={reloadHome}>
      {children}
    </a>
  );
}
