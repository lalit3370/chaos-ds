import '../../src/styles/variables.scss';

export default {
  title: 'Foundations/Colors',
};

const ColorBlock = ({ name, value }) => (
  <div style={{ width: 160 }}>
    <div
      style={{
        height: 64,
        borderRadius: 8,
        background: `var(${value})`,
        border: '1px solid #e5e7eb',
      }}
    />
    <div style={{ marginTop: 8 }}>
      <strong style={{ fontSize: 'var(--font-size-md)' }}>{name}</strong>
      <div style={{ fontSize: 'var(--font-size-sm)' }}>{value}</div>
    </div>
  </div>
);

export const SemanticColors = () => (
  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
    <ColorBlock name="Primary Action" value="--color-action-primary-bg" />
    <ColorBlock name="Primary Hover" value="--color-action-primary-bg-hover" />
    <ColorBlock name="Danger Action" value="--color-action-danger-bg" />
    <ColorBlock name="Surface" value="--color-bg-surface" />
    <ColorBlock name="Muted Surface" value="--color-bg-muted" />
    <ColorBlock name="Primary Text" value="--color-text-primary" />
  </div>
);
