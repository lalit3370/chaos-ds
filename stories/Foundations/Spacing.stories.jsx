import "../../src/styles/variables.scss";
import { spacing } from "../../src/foundations/tokens/spacing.js";
export default {
	title: "Foundations/Spacing",
};

export const Scale = () => {
	const spacingKeys = Object.keys(spacing);
	return (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap", flexDirection: "column" }}>
			{spacingKeys.map((s) => (
				<div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
					<div>space-{s}</div>

					<div
						style={{
							width: `var(--space-${s})`,
							height: `var(--space-${s})`,
							background: "#ddd",
						}}
					/>
				</div>
			))}
		</div>
	);
};
