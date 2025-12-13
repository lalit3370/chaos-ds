import '../../src/styles/variables.scss';

export default {
  title: 'Foundations/Typography',
};

export const TypeScale = () => (
  <div style={{ display: 'grid', gap: 24 }}>
    <div style={{ fontSize: 'var(--font-size-sm)' }}>
      Small text — font-size-sm
    </div>

    <div style={{ fontSize: 'var(--font-size-md)' }}>
      Body text — font-size-md
    </div>

    <div
      style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-medium)',
      }}
    >
      Heading text — font-size-lg
    </div>
  </div>
);
