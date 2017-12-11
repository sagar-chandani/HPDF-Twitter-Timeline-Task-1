import React from 'react';
import { Footer, FooterTab, Button, Text, Right, Icon } from 'native-base';

const FooterBottom = () => {

    return (
<Footer style={{backgroundColor: 'white'}}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button >
              <Text style={{fontSize: 8, color: 'blue', fontWeight: 'bold'}}>All</Text>
            </Button>
            <Button>
              <Text style={{fontSize: 8,  fontWeight: 'bold'}}>Mentions</Text>
            </Button>

          </FooterTab>
          <Right>
              <Icon style={{ marginRight: 8, color: 'blue' }} name='settings'></Icon>
          </Right>
        </Footer>
    );
};

export { FooterBottom };
