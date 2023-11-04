import * as icons from 'react-bootstrap-icons';
const SocialButton = ({iconName, ...props}) => {
  const Icon = icons[iconName]
  return <Icon {...props} />
};

export default SocialButton;
