import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info})
{
    let HOT_URL="https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1553586635-60aba8bfda8b%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dhot%252Bweather%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHx8fDE3Mzc0NzM0NjR8MA%26ixlib%3Drb-4.0.3&blend-w=1&auto=format&fit=crop&q=60"
    let COLD_URL="https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1674407866481-a39b2239f771%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dcold%252Bweather%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8fHwxNzM3NjAwNDEwfDA%26ixlib%3Drb-4.0.3&blend-w=1&auto=format&fit=crop&q=60"
    let RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D"
    return(
        <div className="InfoBox">
            <h1></h1>
            <div className='cardContainer'>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temperature = {info.tempMin}&deg;C</p>
                        <p>Max Temperature = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}</p>
                        </Typography>
                    </CardContent>
                    </Card>
            </div>
        </div>
    )
}