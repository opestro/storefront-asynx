const TextButton = ({ children, href, target, className }: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
    ) => {
      var child = (
        <button
          type="button" className={className + " btn"}>
          {/* slot */}
          {children}
        </button>
      )
      if (href) {
        child = (
          <a href={href} target={target}>
            {child}
          </a>
        )
      }
      return child
    }

export default TextButton