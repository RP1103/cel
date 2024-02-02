import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage  {
  headings: string[] = [
    'வெப்பம்',
    'ஈரப்பதம்',
    '100மூட்டை தொகுதி இலை தேவை',
    'புழு எண்ணிக்கை',
    'சுண்ணாம்பு/அங்குஸ்',
    '100மூட்டை தொகுதி சுண்ணாம்பு/அங்குஸ்'
  ];

  data: any[] = [
    {
      'வெப்பம்': 'பருவம் I- (3) 28°c ',
      'ஈரப்பதம்': '90%',
      '100மூட்டை தொகுதி இலை தேவை': '6 கிராம்',
      'புழு எண்ணிக்கை': '8300-2100',
      'சுண்ணாம்பு/அங்குஸ்': '3 கிராம்',
      '100மூட்டை தொகுதி சுண்ணாம்பு/அங்குஸ்': '75 கிராம்'
    },
    {
      'வெப்பம்': 'பருவம் II- (2) 27°c ',
      'ஈரப்பதம்': '85%',
      '100மூட்டை தொகுதி இலை தேவை': '16 கிராம்',
      'புழு எண்ணிக்கை': '2100-800',
      'சுண்ணாம்பு/அங்குஸ்': '3 கிராம்',
      '100மூட்டை தொகுதி சுண்ணாம்பு/அங்குஸ்': '175 கிராம்'
    },
    {
      'வெப்பம்': 'பருவம் III- (3-1/2) 26°c ',
      'ஈரப்பதம்': '70%',
      '100மூட்டை தொகுதி இலை தேவை': '140 கிராம்',
      'புழு எண்ணிக்கை': '800-260',
      'சுண்ணாம்பு/அங்குஸ்': '5 கிராம்',
      '100மூட்டை தொகுதி சுண்ணாம்பு/அங்குஸ்': '1250 கிராம்'
    },
    {
      'வெப்பம்': 'பருவம் IV- (3-3 1/2) 25°c ',
      'ஈரப்பதம்': '75%',
      '100மூட்டை தொகுதி இலை தேவை': '460 கிராம்',
      'புழு எண்ணிக்கை': '260-140',
      'சுண்ணாம்பு/அங்குஸ்': '5 கிராம்',
      '100மூட்டை தொகுதி சுண்ணாம்பு/அங்குஸ்': '2500 கிராம்'
    },
    {
      'வெப்பம்': 'பருவம் V- (6) 25°c ',
      'ஈரப்பதம்': '70%',
      '100மூட்டை தொகுதி இலை தேவை': '2880 கிராம்',
      'புழு எண்ணிக்கை': '140-70',
      'சுண்ணாம்பு/அங்குஸ்': '5 கிராம்',
      '100மூட்டை தொகுதி சுண்ணாம்பு/அங்குஸ்': '3500 கிராம்'
    },
  ];
}

 
 


