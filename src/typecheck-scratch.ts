import type { ErrorComponentProps } from "@tanstack/router-core";

type Target = (props: ErrorComponentProps) => any;

const direct: Target = ({ error, reset }: { error: Error; reset: () => void }) => null;

const viaProps: Target = (props: ErrorComponentProps) => null;

export { direct, viaProps, type ErrorComponentProps };
