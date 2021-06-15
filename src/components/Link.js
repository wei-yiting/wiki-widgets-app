import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (evt) => {
    if (evt.metaKey || evt.ctrlKey) {
      return;
    }
    evt.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
