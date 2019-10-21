class App extends React.Component {
    constructor(props) {
        super(props);

        // dữ liệu tĩnh lấy được từ server
        this.pastParticiple = [];
        
        // dữ liệu động khi tìm kiếm
        this.state = {
            newItem: '',
            pastParticiple: []
        };

        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);

        this.inputElement = React.createRef();
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/hoangnguyennn/demo/pastParticiple')
            .then(res => {
                this.setState({
                    pastParticiple: res.data
                });
                this.pastParticiple = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        this.inputElement.current.focus();
    }

    onChange(event) {
        this.setState({
            newItem: event.target.value
        });
    }

    onKeyUp(event) {
        let text = event.target.value;
        let pastParticiple = this.pastParticiple;

        let newList = pastParticiple.filter((item) => {
            return (
                item.infinitive.includes(text) ||
                item.simple_past.includes(text) ||
                item.past_participle.includes(text)
            )
        });

        this.setState({
            pastParticiple: newList
        });
    }

    render() {
        const { pastParticiple } = this.state;
        return (
            <div className="m-2">
                <div className="container">
                    <div className="form-inline justify-content-end mb-2">
                        <input
                            type="text"
                            className="form-control mr-2"
                            placeholder="Nhập từ cần tìm vào đây"
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp}
                            ref={this.inputElement} />
                    </div>
                    <table className="table">            
                        <tbody>
                            <tr>
                                <th>Infinitive</th>
                                <th>Simple Past</th>
                                <th>Past Participle</th>
                            </tr>
                            {
                                pastParticiple.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.infinitive}</td>
                                        <td>{item.simple_past}</td>
                                        <td>{item.past_participle}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}