#include <stdio.h>
#include <string.h>                //거리 감지 센서
#include <errno.h>
#include <wiringPi.h>
#include <wiringPiSPI.h>

#define CS_MCP3208 8
#define SPI_CHANNEL 0
#define SPI_SPEED 1000000

int ReadMcp3208ADC(unsigned char adcChannel)
{
    unsigned char buff[3];
    int nAdcValue = 0;
    buff[0] = 0x06 | ((adcChannel & 0x07) >> 2);
    buff[1] = ((adcChannel & 0x07) << 6);
    buff[2] = 0x00;
    digitalWrite(CS_MCP3208, 0);
    wiringPiSPIDataRW(SPI_CHANNEL, buff, 3);
    buff[1] = 0x0F & buff[1];
    nAdcValue = (buff[1] << 8) | buff[2];
    digitalWrite(CS_MCP3208, 1);
    return nAdcValue;
}

int calcDistance(int psdVal)
{
    int distance;
    distance = (67870 / (psdVal - 3)) - 40;
    if (distance > 80)
        distance = 80;
    else if (distance < 10)
        distance = 10;
    return distance;
}

int main(void)
{
    int psdChannel = 1;
    int psdValue = 0;
    int distance = 0;

    if (wiringPiSetupGpio() == -1)
    {
        fprintf(stdout, "Not start wiringPi: %s\n", strerror(errno));
        return 1;
    }
    // wiringPi init
    if (wiringPiSPISetup(SPI_CHANNEL, SPI_SPEED) == -1)
    {
        fprintf(stdout, "wiringPiSPISetup Failed: %s\n", strerror(errno));
        return 1;
    }
    pinMode(CS_MCP3208, OUTPUT);
    while (1)
    {
        psdValue = ReadMcp3208ADC(psdChannel); // sensorRead
        distance = calcDistance(psdValue);
        printf("Cds Sensor Value = %u\n", nCdsValue);
        printf("Distance : %d (cm)\n", distance);
        delay(1000);
    }
    return 0;
}