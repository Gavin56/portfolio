import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'green'
      ? 'linear-gradient(45deg, #38c748 30%, #68e84a 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props) =>
    props.color === 'green'
      ? '0 3px 5px 2px rgba(138, 255, 79, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 40,
  padding: '0 30px',
  margin: 8,
  lineHeight: 1.2,
  textAlign: "center"
});

export default function AdaptingStyledComponents({project}) {
  return (
    <React.Fragment>
      <MyButton size="small" href={project.links.appLink} color="green">Deployed Application</MyButton>
      <MyButton size="small" href={project.links.repoLink} color="blue">Github Repo</MyButton>
    </React.Fragment>
  );
}
