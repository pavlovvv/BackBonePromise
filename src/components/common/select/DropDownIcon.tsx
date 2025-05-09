import ArrowIconSrc from "@components/common/select/assets/ArrowBottom.svg";

export const DropdownIcon = (props: { className?: string }) => (
    <img
        {...props}
        src={ArrowIconSrc}
        alt="arrow"
        style={{width: 24, height: 24, display: 'block', pointerEvents: 'none'}}
    />
);