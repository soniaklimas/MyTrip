import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import LinkIcon from 'assets/icons/chain.svg';
import rubbishIcon from 'assets/icons/rubbish.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  padding-right: ${({ pageContext, twitters }) => (pageContext === twitters ? '50px' : '20px')};
`;

const StyledAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

class Card extends Component {
  render() {
    const { id, pageContext, title, twitterName, articleUrl, content, removeItem } = this.props;
    // const { redirect } = this.state;

    // if (redirect) {
    //   return <Redirect to={`${pageContext}/details/${id}`} />;
    // }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
          {pageContext === 'twitters' && (
            <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
          )}
          {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>

          <ButtonIcon card icon={rubbishIcon} onClick={() => removeItem(pageContext, id)} />
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
