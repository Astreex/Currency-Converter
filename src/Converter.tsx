import { useState, useEffect, useMemo, useContext, createContext, } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Input from '@mui/joy/Input';

type RequestType = {
  [key: string]: number
}

const ColorModeContext = createContext({ styledConverter: () => { } });

export default function Converter() {
  const [data, setData] = useState({} as RequestType)
  const [firstSelect, setFirstSelect] = useState('USD')
  const [secondSelect, setSecondSelect] = useState("RUB")
  const [firstInput, setFirstInput] = useState('0')
  const [secondInput, setSecondInput] = useState('0')
  const actions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.']

  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  useEffect(() => {
    try {
      // const fetchData = async () => {
      //   await axios.get('https://v6.exchangerate-api.com/v6/8ae70399639bc4d193901496/latest/USD')
      //     .then(response => setData(response.data.conversion_rates))
      // }
      // fetchData()
      setData({
        'AED': 3.6725,
        'AFN': 73.641,
        'ALL': 96.7719,
        'AMD': 405.0579,
        'ANG': 1.79,
        'AOA': 835.5761,
        'ARS': 834.57,
        'AUD': 1.5354,
        'AWG': 1.79,
        'AZN': 1.7003,
        'BAM': 1.8173,
        'BBD': 2,
        'BDT': 109.7364,
        'BGN': 1.8177,
        'BHD': 0.376,
        'BIF': 2847.2531,
        'BMD': 1,
        'BND': 1.3466,
        'BOB': 6.9142,
        'BRL': 4.9728,
        'BSD': 1,
        'BTN': 83.0411,
        'BWP': 13.7554,
        'BYN': 3.2539,
        'BZD': 2,
        'CAD': 1.3486,
        'CDF': 2719.045,
        'CHF': 0.8807,
        'CLP': 958.4933,
        'CNY': 7.2048,
        'COP': 3908.7879,
        'CRC': 517.2872,
        'CUP': 24,
        'CVE': 102.4572,
        'CZK': 23.6056,
        'DJF': 177.721,
        'DKK': 6.927,
        'DOP': 58.3995,
        'DZD': 134.5146,
        'EGP': 30.893,
        'ERN': 15,
        'ETB': 56.7031,
        'EUR': 0.9292,
        'FJD': 2.251,
        'FKP': 0.7945,
        'FOK': 6.9272,
        'GBP': 0.7945,
        'GEL': 2.6446,
        'GGP': 0.7945,
        'GHS': 12.4768,
        'GIP': 0.7945,
        'GMD': 66.3098,
        'GNF': 8580.6544,
        'GTQ': 7.8014,
        'GYD': 209.2244,
        'HKD': 7.8203,
        'HNL': 24.642,
        'HRK': 7.001,
        'HTG': 131.9737,
        'HUF': 361.7223,
        'IDR': 15637.4722,
        'ILS': 3.6247,
        'IMP': 0.7945,
        'INR': 83.0391,
        'IQD': 1309.3937,
        'IRR': 41992.1803,
        'ISK': 138.5052,
        'JEP': 0.7945,
        'JMD': 156.4806,
        'JOD': 0.709,
        'JPY': 150.0025,
        'KES': 153.0281,
        'KGS': 89.2731,
        'KHR': 4058.9405,
        'KID': 1.5354,
        'KMF': 457.1316,
        'KRW': 1330.0348,
        'KWD': 0.308,
        'KYD': 0.8333,
        'KZT': 448.2093,
        'LAK': 20715.7637,
        'LBP': 15000,
        'LKR': 312.474,
        'LRD': 192.1895,
        'LSL': 18.9597,
        'LYD': 4.8468,
        'MAD': 10.0683,
        'MDL': 17.8001,
        'MGA': 4537.5755,
        'MKD': 57.5347,
        'MMK': 2095.5147,
        'MNT': 3414.0456,
        'MOP': 8.055,
        'MRU': 39.5276,
        'MUR': 45.7471,
        'MVR': 15.4355,
        'MWK': 1689.6847,
        'MXN': 17.0585,
        'MYR': 4.7804,
        'MZN': 63.8682,
        'NAD': 18.9597,
        'NGN': 1521.3717,
        'NIO': 36.7523,
        'NOK': 10.546,
        'NPR': 132.8658,
        'NZD': 1.6373,
        'OMR': 0.3845,
        'PAB': 1,
        'PEN': 3.8725,
        'PGK': 3.7676,
        'PHP': 55.9678,
        'PKR': 279.4607,
        'PLN': 4.0384,
        'PYG': 7290.3676,
        'QAR': 3.64,
        'RON': 4.6328,
        'RSD': 109.1703,
        'RUB': 92.1439,
        'RWF': 1273.6488,
        'SAR': 3.75,
        'SBD': 8.5034,
        'SCR': 13.3813,
        'SDG': 511.565,
        'SEK': 10.4632,
        'SGD': 1.3466,
        'SHP': 0.7945,
        'SLE': 22.7855,
        'SLL': 22785.4619,
        'SOS': 571.0433,
        'SRD': 36.4517,
        'SSP': 1193.9298,
        'STN': 22.7652,
        'SYP': 12930.6124,
        'SZL': 18.9597,
        'THB': 36.0901,
        'TJS': 10.9325,
        'TMT': 3.4973,
        'TND': 3.1388,
        'TOP': 2.3438,
        'TRY': 30.7787,
        'TTD': 6.7526,
        'TVD': 1.5354,
        'TWD': 31.3193,
        'TZS': 2534.3,
        'UAH': 37.9427,
        'UGX': 3866.5588,
        'USD': 1,
        'UYU': 39.1487,
        'UZS': 12381.5417,
        'VES': 36.2737,
        'VND': 24455.5875,
        'VUV': 120.9075,
        'WST': 2.7482,
        'XAF': 609.5089,
        'XCD': 2.7,
        'XDR': 0.7559,
        'XOF': 609.5089,
        'XPF': 110.8821,
        'YER': 250.0815,
        'ZAR': 18.9607,
        'ZMW': 26.4969,
        'ZWL': 12199.1749,
      })

    } catch (e) {
      console.log(e)
    }
  }, [])
  const handleChangeFirstSelect = (event: SelectChangeEvent) => {
    const target = event.target.value
    setFirstSelect(target as string);
    const firstNumber = Number(firstInput)
    let contentOne: any = []
    let contentTwo: any = []
    for (let idx in data) {
      if (idx == target) {
        contentOne.push(target, data[idx])
      }
      if (idx == secondSelect) {
        contentTwo.push(idx, data[idx])
      }
    }
    let result = firstNumber * (contentTwo[1] / contentOne[1])
    result = (Math.round(result * 10000)) / 10000
    setSecondInput(`${result}`)
  };

  const handleChangeSecondSelect = (event: SelectChangeEvent) => {
    const target = event.target.value
    setSecondSelect(target as string);
    const secondNumber = Number(firstInput)
    let contentOne: any = []
    let contentTwo: any = []
    for (let idx in data) {
      if (idx == firstSelect) {
        contentOne.push(idx, data[idx])
      }
      if (idx == target) {
        contentTwo.push(idx, data[idx])
      }
    }
    console.log(contentOne, contentTwo)
    let result = secondNumber * (contentTwo[1] / contentOne[1])
    result = (Math.round(result * 10000)) / 10000
    setSecondInput(`${result}`)
  };

  const handleChangeFirstInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target.value
    if (actions.includes(target[target.length - 1]) && target.length < 13) {
      if (firstInput[0] == '0' && target.length == 2 && target[1] != '0' && target[1] != '.' && target[1] != ',') {
        let secondNumber = target[1]
        target = firstInput.substring(0, firstInput.length - 1) + secondNumber
      }
      if (firstInput[0] == '0' && target[1] == '0' && !target[0]) {
        target = firstInput
      }
      if (!firstInput[0] && target[0] == '.') {
        target = '0.' + firstInput
      } else if (!firstInput[0] && target[0] == ',') {
        target = '0.' + firstInput
      }
      if (target[target.length - 1] == ',') {
        target = firstInput + '.'
      }
      if ((firstInput.includes(',') || firstInput.includes('.')) && (target.includes(',') || target.includes('.')) && (target[target.length - 1] == ',' || target[target.length - 1] == '.') && firstInput.length < target.length) {
        target = firstInput
      }
      if (firstInput[0] == '0' && target[1] == '0' && target[0] == '0') {
        target = firstInput
      }
      setFirstInput(target)
      const firstNumber = Number(target)
      let contentOne: any = []
      let contentTwo: any = []
      for (let idx in data) {
        if (idx == firstSelect) {
          contentOne.push(firstSelect, data[idx])
        }
        if (idx == secondSelect) {
          contentTwo.push(idx, data[idx])
        }
      }
      let result = firstNumber * (contentTwo[1] / contentOne[1])
      result = (Math.round(result * 10000)) / 10000
      setSecondInput(`${result}`)
    } else {
      if (!target && firstInput.length == 1) {
        target = '0'
        setFirstInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentTwo[1] / contentOne[1])
        setSecondInput(`${result}`)
      }
      if (firstInput.length > target.length) {
        setFirstInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentTwo[1] / contentOne[1])
        setSecondInput(`${result}`)
      }
    }
  }

  const handleChangeSecondInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target.value
    if (actions.includes(target[target.length - 1]) && target.length < 13) {
      if (secondInput[0] == '0' && target.length == 2 && target[1] != '0' && target[1] != '.' && target[1] != ',') {
        let secondNumber = target[1]
        target = secondInput.substring(0, secondInput.length - 1) + secondNumber
      }
      if (secondInput[0] == '0' && target[1] == '0' && !target[0]) {
        target = secondInput
      }
      if (!secondInput[0] && target[0] == '.') {
        target = '0.' + secondInput
      } else if (!secondInput[0] && target[0] == ',') {
        target = '0.' + secondInput
      }
      if (target[target.length - 1] == ',') {
        target = secondInput + '.'
      }
      if ((secondInput.includes(',') || secondInput.includes('.')) && (target.includes(',') || target.includes('.')) && (target[target.length - 1] == ',' || target[target.length - 1] == '.') && secondInput.length < target.length) {
        target = secondInput
      }
      if (secondInput[0] == '0' && target[1] == '0' && target[0] == '0') {
        target = secondInput
      }
      setSecondInput(target)
      const firstNumber = Number(target)
      let contentOne: any = []
      let contentTwo: any = []
      for (let idx in data) {
        if (idx == firstSelect) {
          contentOne.push(firstSelect, data[idx])
        }
        if (idx == secondSelect) {
          contentTwo.push(idx, data[idx])
        }
      }
      let result = firstNumber * (contentOne[1] / contentTwo[1])
      result = (Math.round(result * 10000)) / 10000
      setFirstInput(`${result}`)
    } else {
      if (!target && secondInput.length == 1) {
        target = '0'
        setSecondInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentOne[1] / contentTwo[1])
        setFirstInput(`${result}`)
      }
      if (secondInput.length > target.length) {
        setSecondInput(target)
        const firstNumber = Number(target)
        let contentOne: any = []
        let contentTwo: any = []
        for (let idx in data) {
          if (idx == firstSelect) {
            contentOne.push(firstSelect, data[idx])
          }
          if (idx == secondSelect) {
            contentTwo.push(idx, data[idx])
          }
        }
        let result = firstNumber * (contentOne[1] / contentTwo[1])
        setFirstInput(`${result}`)
      }
    }
  }

  const getStyledSelectData = (data: RequestType) => {
    let content = []
    for (let idx in data) {
      content.push(<MenuItem key={idx} value={idx}>{idx}</MenuItem>)
    }
    return content
  }

  const currencyReverse = () => {
    setFirstSelect(secondSelect)
    setSecondSelect(firstSelect)
    setSecondInput(firstInput)
    setFirstInput(secondInput)
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: 'absolute',
          top: '2px',
          right: '22px',
          width: '20px',
          height: '20px',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
        }}>
        <IconButton sx={{ }}
          onClick={colorMode.styledConverter} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Container>
        <Typography variant='h4' sx={{ marginTop: 3, textAlign: 'center' }}>Currency Converter</Typography>
        <Box sx={{ minWidth: 120, display: 'flex', justifyContent: 'space-around', margin: 2 }}>
          <FormControl>
            <InputLabel>From</InputLabel>
            <Select
              value={firstSelect}
              label={"From"}
              onChange={handleChangeFirstSelect}
            >
              {data && getStyledSelectData(data)}
            </Select>
          </FormControl>
          <IconButton sx={{ marginTop: 0.5, position: 'absolute' }} color='inherit' onClick={() => currencyReverse()}>
            <SwapHorizIcon fontSize='large' />
          </IconButton>
          <FormControl>
            <InputLabel>To</InputLabel>
            <Select
              value={secondSelect}
              label="To"
              onChange={handleChangeSecondSelect}
            >
              {data && getStyledSelectData(data)}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, display: 'flex', justifyContent: 'space-around', margin: 2, flexWrap: 'wrap' }}>
          <Input sx={{ marginBlock: '5px' }} placeholder="Type in here…" variant="outlined" onChange={handleChangeFirstInput} value={firstInput} />
          <Input sx={{ marginBlock: '5px' }} placeholder="Type in here…" variant="outlined" onChange={handleChangeSecondInput} value={secondInput} />
        </Box>
      </Container>
    </>
  )
}

export function StyledConverter() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...grey,
        ...(mode === 'dark' ? {
          main: grey[50],
        } :
          {
            main: grey[900]
          }),
      },
      ...(mode === 'dark' && {
        background: {
          default: '#202020',
          paper: '#202020'
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
            primary: '#202020'
          }
          : {
            primary: grey[50]
          }),
      },
    },
  });
  const theme = createTheme(getDesignTokens(mode))

  const colorMode = useMemo(
    () => ({
      styledConverter: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Converter />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}