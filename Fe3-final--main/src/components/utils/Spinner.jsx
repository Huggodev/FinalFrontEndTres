import { RotatingLines } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div style={{ marginTop: '10rem' }}>
      <RotatingLines

        strokeColor='gray'
        strokeWidth="5"
        animationDuration="0.75"
        width='60'
        visible={true}
      />
    </div>
  )
}

export default Spinner