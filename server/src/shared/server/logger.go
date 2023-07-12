package server

import (
	"github.com/natefinch/lumberjack"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

func NewZapLogger() (*zap.Logger, error) {
	return InitLogger(), nil
	// return zap.NewProduction()

	config := zap.NewDevelopmentConfig()
	config.EncoderConfig.TimeKey = ""

	return config.Build()
}

func InitLogger() *zap.Logger {
	writeSyncer := getLogWriter()
	encoder := getEncoder()
	core := zapcore.NewCore(encoder, writeSyncer, zapcore.DebugLevel)

	logger := zap.New(core, zap.AddCaller())
	return logger
	// sugarLogger = logger.Sugar()
}

func getEncoder() zapcore.Encoder {
	encoderConfig := zap.NewProductionEncoderConfig()
	encoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder
	encoderConfig.EncodeLevel = zapcore.CapitalLevelEncoder
	return zapcore.NewConsoleEncoder(encoderConfig)
}

func getLogWriter() zapcore.WriteSyncer {
	lumberJackLogger := &lumberjack.Logger{
		// 日志文件的位置
		Filename: "./test.log",
		// 在进行切割之前，日志文件的最大大小（以MB为单位）
		MaxSize: 10,
		// 保留旧文件的最大个数
		MaxBackups: 5,
		// 保留旧文件的最大天数
		MaxAge: 30,
		// 是否压缩/归档旧文件
		Compress: false,
	}
	return zapcore.AddSync(lumberJackLogger)
}
