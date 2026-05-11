import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExternalLinkDirective } from '../../directives/external-link.directive';
import { ArrowBoxIconComponent } from '../../components/icons/arrow-box-icon.component';
import { GithubIconComponent } from '../../components/icons/github-icon.component';
import { TwitterIconComponent } from '../../components/icons/twitter-icon.component';
import { YouTubeIconComponent } from '../../components/icons/youtube-icon.component';

const icons = [ArrowBoxIconComponent, GithubIconComponent, TwitterIconComponent, YouTubeIconComponent];

@Component({
    selector: 'app-home',   
    imports: [RouterLink, ExternalLinkDirective, ...icons],
    //templateUrl: './home.component.html',
    template: '
    
    <section class="newShit">
        <button class="sign-in" (click)="testingButton()"> Sign in </button>
        <button class="sign-in" ><a href="google.com" ></a>Other button</button>
        <a href="google.com"> go out </a>

    </section>

    <h1>Count: {{testingCounter}} </h1>
        
    
    '
    
    styleUrl: './home.component.scss',
    host: {
        'class': 'content'
    }
})
export class HomeComponent {
    testingCounter = 0

    testingButton(): void{
        this.testingCounter += 1
    }
}
