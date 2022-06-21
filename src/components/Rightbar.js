import React from 'react'
import './Rightbar.css'
import spaceshooter from '../images/spaceshooter.jpeg'
import academy from '../images/academy.png'
import js from '../images/js.png'
import pfp3 from '../images/pfp3.png'
import { Input } from 'web3uikit'
import Button from '@mui/material/Button'
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const Rightbar = ({ udUser }) => {
  const trends = [
    {
      img: spaceshooter,
      text:
        'Decenttralize the next generation of blockchain social networks...',
      link:
        'https://medium.com/polkadot-ecosystem-promoteam/subsocial-the-next-all-in-one-generation-of-blockchain-social-networks-63401cce14bd',
    },
    {
      img: pfp3,
      text: 'Sixty-Four Squared: The Ultimate Pixel Art NFT...',
      link:
        'https://medium.com/@64squared/sixty-four-squared-the-ultimate-pixel-art-nft-f8d79e2311ac',
    },
    {
      img: academy,
      text: 'Master DeFi in 2022. Start  at the Moralis Academy...',
      link:
        'https://medium.com/@galaxybchain/possible-impact-of-2nd-liquidity-generation-events-lge-2-on-core-ecosystem-and-to-those-who-will-fc206123c1c5',
    },
    {
      img: js,
      text: 'Become a Web3 Developer with just simple JS...',
      link: 'https://academy.moralis.io/all-courses',
    },
  ]

  return (
    <>
      <div className="rightbarContent">
        <p className="signed">Signed as</p>
        <Button
          variant="contained"
          className="connected-btn"
          endIcon={<SafetyCheckIcon />}
        >
          {udUser}
        </Button>
        <br />
        <br />
        <Input
          label="Search decentralize"
          name="Search decentralize"
          prefixIcon="search"
          labelBgColor="rgb(233 233 233 / 65%)"
        ></Input>
        <div className="trends">
          <h2>Topics</h2>
          Post and comment on specific topics.
          <p className="topic-title"># instagood </p>
          <p className="topic-description">
            Pinned by community • 9.5K+ posts in this group
          </p>
          <p className="topic-title"># sports</p>
          <p className="topic-description">
            Pinned by admin • 8.5K+ posts in this group
          </p>
          <p className="topic-title"># photooftheday</p>
          <p className="topic-description">
            Pinned by admin • 7.5K+ posts in this group
          </p>
          <hr />
          <h2>Trend Post </h2>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {trends.map((e) => {
              return (
                <>
                  <ListItem
                    alignItems="flex-start"
                    onClick={() => window.open(e.link)}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Popular Articles" src={e.img} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={e.text}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              )
            })}
          </List>
        </div>
      </div>
    </>
  )
}

export default Rightbar
