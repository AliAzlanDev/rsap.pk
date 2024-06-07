import type { MDXComponents } from "mdx/types";
import { ProgressBarLink } from "./components/global/progress-bar";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    a: (props) => {
      const { href, target, ...rest } = props;
      if (target === "_blank") {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {props.children}
          </a>
        );
      }
      return (
        <ProgressBarLink href={`${href}`} {...rest}>
          {props.children}
        </ProgressBarLink>
      );
    },
  };
}
