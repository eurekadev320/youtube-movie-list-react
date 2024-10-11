import { Box, styled } from '@mui/material';
import backgroundImage from '../../../../assets/img-box-bg.jpg';

const DetailBox = styled(Box)`
  width: 70%;
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default DetailBox;
