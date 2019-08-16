import React, { Component } from 'react';
import Insured from '@/components/Policy/Insured';
import { ENDTIME, START_TIME } from '@/components/Const';
import Slide from '@material-ui/core/Slide/index';
import Typography from '@material-ui/core/Typography/index';
import ExpansionPanel from '@material-ui/core/ExpansionPanel/index';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary/index';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails/index';
import { Button, withStyles } from '@material-ui/core/index';
import Deductible from '@/components/Policy/Deductible';
import Limit from '@/components/Policy/Limit';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions/index';
import Dialog from '@material-ui/core/Dialog/index';
import Fab from '@material-ui/core/Fab/index';
import Zoom from '@material-ui/core/Zoom/index';
import AddIcon from '@material-ui/icons/Add';
import PolicyCoverage from '@/components/Policy/PolicyCoverage';
import { init as intl } from '@/util/init';
import { formatMessage } from 'umi-plugin-locale';
import Periods from '@/components/Policy/Periods';
import { _STYLE_POLICY } from '@/PolicyStyle';
import { router } from 'umi';


function Transition(props) {
  return <Zoom direction="up" {...props} />;
}

const defaultTyphoon = {
  distance: [
    0,
  ],
  event_number_covered: 0,
  index_type: 1,
  location_centers: [null],
  location_type: 0,
  peril_deductible_amount: 0,
  peril_deductible_ratio: 0,
  peril_deductible_type: 0,
  sub_limit: null,
  subperiod_end: [
    '2019-11-12',
  ],
  subperiod_start: [
    '2019-08-13',
  ],
  ticks: [
    {
      subpid: 0,
      trigger_value: [
        [
          {
            trigger: 1,
            value: null,
          },
        ],
      ],
    },
  ],
  trigger_type: 0,
  underlying: 'Beaufort scale',
  underlying_lower_threshold: 0,
  underlying_type: 0,
  underlying_upper_threshold: 0,
  weights: [],
  wmo_ids: [],
};


const defaultWeather = {
  distance: [],
  event_number_covered: 0,
  index_type: 0,
  location_centers: [
    '上海-南汇',
  ],
  location_type: 0,
  peril_deductible_amount: 0,
  peril_deductible_ratio: 0,
  peril_deductible_type: 0,
  sub_limit: null,
  subperiod_end: [
    '2019-11-13',
  ],
  subperiod_start: [
    '2019-08-13',
  ],
  ticks: [
    {
      subpid: 0,
      trigger_value: [
        {
          trigger: 0,
          value: null,
        },
      ],
    },
  ],
  trigger_type: 0,
  underlying: 'TempMax',
  underlying_lower_threshold: 0,
  underlying_type: 0,
  underlying_upper_threshold: 0,
  weights: [
    null,
  ],
  wmo_ids: [
    58369,
  ],
};




class Policy extends Component {


  subperiods_start = [START_TIME];
  subperiods_end = [ENDTIME];
  underlying = ['Intensity category'];
  coverages = [defaultTyphoon];

  constructor(props) {
    super(props);
    this.state = {
      slide: 'left',
      user_name: '',
      submissionId: '',
      trigger_type: '0',
      insured_name: '',
      subject: '',
      insured_place: '',
      underlying_type: '0',
      deductible_type: '0',
      deductible_amount: '',
      deductible_radio: '',
      limit: '',
      event_number_covered: '0',
      coverageArray: [0],


      triggers: '',
      ticks: '',
      underlyingUnit: '℃',
      rootPlusStatus: false,
      stationArray: [0],
      subperiodsArray: [0],
      periodCount: [0],
      expanded: null,
      exportButton: true,
      inception: START_TIME,
      end: ENDTIME,
    };
    this.subperiods_start[0] = START_TIME;
    this.subperiods_end[0] = ENDTIME;
  }

  componentWillMount() {
    if (window.localStorage.getItem('unSubmissionNo') !== null && window.localStorage.getItem('unSubmissionNo') !== undefined) {
      var json = JSON.parse(window.localStorage.getItem('unSubmissionNo'));
      this.setState({
        slide: json.state.slide,
        user_name: json.state.user_name,
        submissionId: json.state.submissionId,
        trigger_type: json.state.trigger,
        insured_name: json.state.insured_name,

        subject: json.state.subject,
        insured_place: json.state.insured_place,
        underlying_type: json.state.underlying_type,
        deductible_type: json.state.deductible_type,
        deductible_amount: json.state.deductible_amount,
        deductible_radio: json.state.deductible_radio,
        limit: json.state.limit,
        event_number_covered: json.state.event_number_covered,
        coverageArray: json.state.coverageArray,


        triggers: json.state.triggers,
        ticks: json.state.ticks,
        underlyingUnit: json.state.underlyingUnit,
        rootPlusStatus: json.state.rootPlusStatus,
        stationArray: json.state.stationArray,
        subperiodsArray: json.state.subperiodsArray,
        periodCount: json.state.periodCount,
        expanded: json.state.expanded,
        exportButton: json.state.exportButton,
        inception: json.state.inception,
        end: json.state.end,

      });
      this.provinces = json.provinces;
      this.stations = json.stations;
      this.wmo_ids = json.wmo_ids;
      this.subperiods_start = json.subperiods_start;
      this.subperiods_end = json.subperiods_end;
      this.ticks = json.ticks;
      this.triggers = json.triggers;
      this.weights = json.weights;
      this.underlying = json.underlying;
      this.coverages = json.coverages;
    }
    document.addEventListener('keydown', this.onKeyDown);

  }


  onKeyDown = (e) => {
    switch (e.keyCode) {
      case 116://F5
        this.editCoverage(null);
        break;
    }
  };


  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };


  render() {
    const { expanded } = this.state;
    const { classes } = this.props;
    return (
      <div color={'primary'} className={classes.root}>


        <Slide direction={this.state.slide} in={true} mountOnEnter unmountOnExit>

          <div color={'primary'} className={classes.root}
               style={{ top: '50px', position: 'relative' }}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={'primary'}
                            className={classes.heading}>{formatMessage({ id: intl.policy.lableText1 })}</Typography>
                {/*<Typography className={classes.secondaryHeading}>在此填写基本信息</Typography>*/}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails color={'primary'}>
                <Insured onChangeState={this.onChangeState}/>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={'primary'}
                            className={classes.heading}>{formatMessage({ id: intl.policy.lableText2 })}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div color={'primary'} style={{ width: '100%' }}>
                  {this.state.coverageArray.map((item, index) =>
                    <PolicyCoverage
                      key={index}
                      keyId={index}
                      index={this.underlying[index]}
                      onChangeUnderlying={this.onChangeUnderlying}
                      editCoverage={this.editCoverage}
                    />)}

                  <Button color={'primary'}
                          variant={'contained'}
                          style={{ marginRight: '4px', left: 0 }}
                          onClick={this.addCoverage}>{formatMessage({ id: intl.add })}</Button>
                  <Button color={'primary'}
                          variant={'contained'}
                          onClick={this.delCoverage}>{formatMessage({ id: intl.del })}</Button>

                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={'primary'}
                            className={classes.heading}>{formatMessage({ id: intl.policy.lableText3 })}</Typography>

              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div color={'primary'} style={{ width: '100%' }}>


                  <Periods
                    onChangeState={this.onChangeState}
                    inception={this.state.inception}
                    end={this.state.end}/>

                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography className={classes.heading}
                            color={'primary'}>{formatMessage({ id: intl.policy.lableText4 })}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Deductible onChangeState={this.onChangeState}
                            deductible_amount={this.state.deductible_amount}
                            deductible_radio={this.state.deductible_radio}/>
              </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={'primary'}
                            className={classes.heading}>{formatMessage({ id: intl.policy.lableText5 })}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Limit
                  limitNo={this.state.event_number_covered}
                  onChangeState={this.onChangeState}/>
              </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography className={classes.heading}
                            color={'primary'}>{formatMessage({ id: intl.policy.lableText6 })}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography color={'primary'}>
                  保费金额 ：{this.state.provinces}
                </Typography>
              </ExpansionPanelDetails>

              <ExpansionPanelActions>
                <Button size="small" color="primary" disabled={this.state.exportButton}>
                  导出
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>


            <Dialog className={classes.rootPlus} open={this.state.rootPlusStatus}
                    TransitionComponent={Transition} onClick={this.clickButtonPlus}>
              <Button color={'primary'} className={classes.buttonMargin} variant="contained"
                      size="large">历史事件</Button>
              <Button color={'primary'} className={classes.buttonMargin} variant="contained"
                      size="large">历史赔款</Button>
              <Button color={'primary'} className={classes.buttonMargin} variant="contained"
                      size="large">预报预警</Button>
              <Button color={'primary'} className={classes.buttonMargin} variant="contained"
                      size="large">历史事件</Button>
            </Dialog>
          </div>


        </Slide>
        <Slide direction={this.state.slide} in={true} mountOnEnter unmountOnExit>
          <div color={'primary'} className={classes.bottomNv}>
            <div color={'primary'} className={classes.bottomPlus}>
              <Fab color="primary" aria-label="Add"
                   onClick={this.clickButtonPlus}>
                <AddIcon/>
              </Fab>
            </div>
            <Button color={'primary'} className={classes.bottomNv_b}
                    onClick={this.onClickSave}>保存</Button>
            <Button color={'primary'} className={classes.bottomNv_b}>询价</Button>
            <Button color={'primary'} className={classes.bottomNv_b}>另存</Button>
          </div>
        </Slide>
      </div>
    );
  }

  onChangeState = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log(event.target.value);
  };


  //region  站点选择
  setProvinces = (key, text) => {

    this.provinces[key] = text;

    console.log(this.provinces);

  };

  setStations = (key, text) => {

    this.stations[key] = text;

    console.log(this.stations);

  };

  setWmo_ids = (key, text) => {

    this.wmo_ids[key] = text;

    console.log(this.wmo_ids);

  };

  setWeights = (key, text) => {

    this.weights[key] = text;

    console.log(this.weights);

  };


  //endregion

  //region 保险责任
  addCoverage = () => {
    console.log(this.coverages);
    let arr = [...this.state.coverageArray];
    arr.push(1);
    this.underlying[arr.length - 1] = 'Intensity category';
    this.setState({
      coverageArray: arr,
    });
    this.coverages[this.coverages.length] = defaultTyphoon;
    console.log(this.coverages);
  };

  delCoverage = () => {

    let arr = [...this.state.coverageArray];
    if (arr.length !== 1) {
      arr.pop();
      this.setState({
        coverageArray: arr,
      });
      this.coverages.pop();
      console.log(this.coverages);
    } else {
      // Toast.fail("不能删除最后一个")
    }

  };


  editCoverage = (keyId) => {
    console.log(keyId);

    var json = {
      provinces: this.provinces,
      stations: this.stations,
      wmo_ids: this.wmo_ids,
      subperiods_start: this.subperiods_start,
      subperiods_end: this.subperiods_end,
      ticks: this.ticks,
      triggers: this.triggers,
      weights: this.weights,
      underlying: this.underlying,
      coverages: this.coverages,
      state: this.state,
    };

    window.localStorage.setItem('unSubmissionNo', JSON.stringify(json));
    setTimeout(function() {
      router.push('/policy/coverage');
    }, 2000);

  };
  //endregion

  //region 保险期间


  allStartTime = (key, date) => {
    this.subperiods_start[key] = date;

    alert(this.subperiods_start);
  };
  allEndTime = (key, date) => {
    this.subperiods_end[key] = date;

    alert(this.subperiods_end);
  };
  //endregion

  //region 指数定义


  //underlying
  onChangeUnderlying = id => e => {
    console.log(e.target.value);
    this.underlying[id] = e.target.value;

    // eslint-disable-next-line default-case
    let unit;


    switch (e.target.value) {
//            case "Tmax":
//                unit = ("℃");
//                break;
      case 'TempMax':
        unit = '℃';
        this.coverages[id] = defaultWeather;
        break;
      case 'TempMin':
        unit = '℃';
        this.coverages[id] = defaultWeather;
        break;
      case 'TempAverage':
        unit = '℃';
        this.coverages[id] = defaultWeather;
        break;
      case 'WindSpeedMax':
        unit = 'm/s';
        this.coverages[id] = defaultWeather;
        break;
      case 'WindSpeedGust':
        unit = 'm/s';
        this.coverages[id] = defaultWeather;
        break;
      case 'WindSpeedAverage':
        unit = 'm/s';
        this.coverages[id] = defaultWeather;
        break;
      case 'Precipitation':
        unit = 'mm';
        this.coverages[id] = defaultWeather;
        break;
      case 'SunshineHour':
        unit = 'H';
        this.coverages[id] = defaultWeather;
        break;
      default:
        this.coverages[id] = defaultTyphoon;
        break;

    }
    this.setState({
      underlyingUnit: unit,
    });

  };


  //endregion
  //region 赔偿标准
  onChangeTriggers = (key, subkey, date) => {

    this.triggers[key][subkey] = date;
    console.log(this.triggers);
  };

  onChangeTicks = (key, subkey, date) => {

    this.ticks[key][subkey] = date;
    console.log(this.ticks);
  };

  //endregion


  clickButtonPlus = () => {
    this.setState({
      rootPlusStatus: !this.state.rootPlusStatus,
    });
  };


  //region 底部按钮
  onClickSave = () => {
    console.log('allState' + JSON.stringify(this.state));
    console.log('startTimes' + JSON.stringify(this.subperiods_start));
    console.log('endTimes' + JSON.stringify(this.subperiods_end));
    console.log('provinces' + JSON.stringify(this.provinces));
    console.log('stations' + JSON.stringify(this.stations));
    console.log('wmo_ids' + JSON.stringify(this.wmo_ids));
    console.log('ticks' + JSON.stringify(this.ticks));
    console.log('triggers' + JSON.stringify(this.triggers));
    console.log('weights' + JSON.stringify(this.weights));
    // eslint-disable-next-line array-callback-return
    this.ticks.find(value => {
      if (value === undefined || value === '')
        console.log('ticks中有空');
    });
    // eslint-disable-next-line array-callback-return
    this.triggers.find(value => {
      if (value === undefined || value === '')
        console.log('trigger中有空');
    });
    console.log('allStations' + this.stations);

  };
  //endregion


}

export default withStyles(_STYLE_POLICY)(Policy);




