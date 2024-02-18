import { useState, useEffect, useMemo, useContext, createContext, } from 'react';
import axios from 'axios';
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
import TextField from '@mui/material/TextField';


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
      setData({
        "USD":1,
        "AED":3.6725,
        "AFN":73.6697,
        "ALL":96.7868,
        "AMD":404.9115,
        "ANG":1.7900,
        "AOA":835.0553,
        "ARS":835.0500,
        "AUD":1.5319,
        "AWG":1.7900,
        "AZN":1.7003,
        "BAM":1.8163,
        "BBD":2.0000,
        "BDT":109.7541,
        "BGN":1.8163,
        "BHD":0.3760,
        "BIF":2844.7542,
        "BMD":1.0000,
        "BND":1.3465,
        "BOB":6.9198,
        "BRL":4.9735,
        "BSD":1.0000,
        "BTN":83.0370,
        "BWP":13.7580,
        "BYN":3.2500,
        "BZD":2.0000,
        "CAD":1.3483,
        "CDF":2703.3841,
        "CHF":0.8809,
        "CLP":964.5553,
        "CNY":7.2051,
        "COP":3907.6886,
        "CRC":517.2293,
        "CUP":24.0000,
        "CVE":102.3976,
        "CZK":23.6216,
        "DJF":177.7210,
        "DKK":6.9288,
        "DOP":58.4226,
        "DZD":134.5150,
        "EGP":30.8960,
        "ERN":15.0000,
        "ETB":56.7674,
        "EUR":0.9287,
        "FJD":2.2525,
        "FKP":0.7941,
        "FOK":6.9288,
        "GBP":0.7941,
        "GEL":2.6418,
        "GGP":0.7941,
        "GHS":12.4933,
        "GIP":0.7941,
        "GMD":65.7029,
        "GNF":8585.3763,
        "GTQ":7.8019,
        "GYD":209.2303,
        "HKD":7.8215,
        "HNL":24.6497,
        "HRK":6.9969,
        "HTG":132.1825,
        "HUF":361.3685,
        "IDR":15650.9072,
        "ILS":3.6115,
        "IMP":0.7941,
        "INR":83.0371,
        "IQD":1309.4406,
        "IRR":42029.7526,
        "ISK":138.4894,
        "JEP":0.7941,
        "JMD":156.6074,
        "JOD":0.7090,
        "JPY":150.1969,
        "KES":146.5343,
        "KGS":89.4564,
        "KHR":4058.7030,
        "KID":1.5319,
        "KMF":456.8657,
        "KRW":1332.9185,
        "KWD":0.3080,
        "KYD":0.8333,
        "KZT":449.0909,
        "LAK":20695.6515,
        "LBP":15000.0000,
        "LKR":312.4380,
        "LRD":192.5369,
        "LSL":18.8869,
        "LYD":4.8469,
        "MAD":10.0667,
        "MDL":17.7368,
        "MGA":4537.5444,
        "MKD":57.3118,
        "MMK":2095.4968,
        "MNT":3418.5013,
        "MOP":8.0562,
        "MRU":39.5287,
        "MUR":46.4231,
        "MVR":15.4366,
        "MWK":1692.9042,
        "MXN":17.0576,
        "MYR":4.7804,
        "MZN":63.8889,
        "NAD":18.8869,
        "NGN":1506.9608,
        "NIO":36.7632,
        "NOK":10.5201,
        "NPR":132.8593,
        "NZD":1.6344,
        "OMR":0.3845,
        "PAB":1.0000,
        "PEN":3.8725,
        "PGK":3.7686,
        "PHP":55.9347,
        "PKR":279.3972,
        "PLN":4.0308,
        "PYG":7299.0964,
        "QAR":3.6400,
        "RON":4.6239,
        "RSD":108.8409,
        "RUB":92.4172,
        "RWF":1275.7750,
        "SAR":3.7500,
        "SBD":8.4965,
        "SCR":13.4759,
        "SDG":509.1350,
        "SEK":10.4529,
        "SGD":1.3465,
        "SHP":0.7941,
        "SLE":22.7855,
        "SLL":22785.4619,
        "SOS":571.0578,
        "SRD":36.4496,
        "SSP":1200.9090,
        "STN":22.7519,
        "SYP":12913.6490,
        "SZL":18.8869,
        "THB":36.0771,
        "TJS":10.9441,
        "TMT":3.4991,
        "TND":3.1397,
        "TOP":2.3452,
        "TRY":30.8464,
        "TTD":6.7509,
        "TVD":1.5319,
        "TWD":31.3348,
        "TZS":2536.4053,
        "UAH":37.9897,
        "UGX":3869.2132,
        "UYU":39.1482,
        "UZS":12525.3803,
        "VES":36.3358,
        "VND":24452.1104,
        "VUV":121.0541,
        "WST":2.7458,
        "XAF":609.1543,
        "XCD":2.7000,
        "XDR":0.7549,
        "XOF":609.1543,
        "XPF":110.8176,
        "YER":250.0617,
        "ZAR":18.8870,
        "ZMW":25.5408,
        "ZWL":12453.7752
       })
      const fetchData = async () => {
        await axios.get('https://v6.exchangerate-api.com/v6/8ae70399639bc4d193901496/latest/USD')
          .then(response => setData(response.data.conversion_rates))
      }
      fetchData()
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
        <IconButton
          onClick={colorMode.styledConverter} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Container sx={{bgcolor: 'background.default'}}>
        <Typography variant='h4' sx={{ marginTop: 3, textAlign: 'center' }}>Currency Converter</Typography>
        <Box sx={{ minWidth: 120, display: 'flex', justifyContent: 'space-around', margin: 2 }}>
          <FormControl sx={{ "& button:Mui-selected": {color:"success"},}}>
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
            <InputLabel color='primary' >To</InputLabel>
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
        <TextField
          value={firstInput}
          onChange={handleChangeFirstInput}
          size="small"
          />
        <TextField
          value={secondInput}
          onChange={handleChangeSecondInput}
          size="small"
        />
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
