import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function ArrowIcon({ planet, hoveredItem }) {
  return (
    <ArrowForwardIosRoundedIcon
      style={{
        color: 'white',
        fontSize: '2.4rem',
        opacity: planet === hoveredItem ? 1 : 0.22,
        transition: 'all 0.2s ease-out',
      }}
    />
  );
}
